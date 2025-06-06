#!/usr/bin/env node

/**
 * Supabase Keepalive Script
 *
 * This script sends a simple request to your API to prevent Supabase from
 * going inactive due to inactivity. Run this daily via cron job or GitHub Actions.
 *
 * Usage:
 * - Local: node scripts/keepalive.js
 * - With environment: SITE_URL=https://yoursite.com node scripts/keepalive.js
 * - As cron job: 0 12 * * * cd /path/to/project && node scripts/keepalive.js
 */

const https = require("https");
const http = require("http");

// Configuration
const SITE_URL =
  process.env.SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
const KEEPALIVE_ENDPOINT = "/api/keepalive"; // Change to "/api/register" for testing if keepalive endpoint doesn't exist
const TIMEOUT = 30000; // 30 seconds

/**
 * Make HTTP/HTTPS request
 */
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname,
      method: "GET",
      timeout: TIMEOUT,
      headers: {
        "User-Agent": "Supabase-Keepalive-Bot/1.0",
        Accept: "application/json",
      },
    };

    const req = client.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });

    req.end();
  });
}

/**
 * Main keepalive function
 */
async function keepalive() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Starting Supabase keepalive...`);

  try {
    // Construct the full URL
    const fullUrl = `${SITE_URL}${KEEPALIVE_ENDPOINT}`;
    console.log(`[${timestamp}] Sending request to: ${fullUrl}`);

    // Make the request
    const response = await makeRequest(fullUrl);

    // Log the response
    console.log(`[${timestamp}] Response status: ${response.statusCode}`);

    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`[${timestamp}] ✅ Keepalive successful!`);

      // Try to parse response body
      try {
        const body = JSON.parse(response.body);
        if (body.message) {
          console.log(`[${timestamp}] Message: ${body.message}`);
        }
      } catch (e) {
        // Response might not be JSON, that's okay
      }

      return true;
    } else {
      console.log(
        `[${timestamp}] ⚠️  Unexpected status code: ${response.statusCode}`
      );
      console.log(`[${timestamp}] Response body: ${response.body}`);
      return false;
    }
  } catch (error) {
    console.error(`[${timestamp}] ❌ Keepalive failed:`, error.message);
    return false;
  }
}

/**
 * Run the script
 */
if (require.main === module) {
  keepalive()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error("Unexpected error:", error);
      process.exit(1);
    });
}

module.exports = { keepalive };
