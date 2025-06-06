# Supabase Keepalive System

This system prevents your Supabase database from going inactive due to inactivity by automatically sending daily requests to keep the connection alive.

## 🚨 Problem

Supabase free tier databases pause after 7 days of inactivity, which can cause your application to stop working. This keepalive system solves that by sending automated daily requests.

## 🛠️ Components

### 1. Keepalive API Endpoint (`/api/keepalive`)

- **Location**: `src/app/api/keepalive/route.ts`
- **Purpose**: Lightweight endpoint that performs a simple database query
- **Query**: Counts records in the `registrations` table (minimal resource usage)
- **Response**: JSON with success status, timestamp, and record count

### 2. Keepalive Script (`scripts/keepalive.js`)

- **Purpose**: Node.js script that calls the keepalive endpoint
- **Features**:
  - Automatic URL detection (supports Vercel, custom domains, localhost)
  - Comprehensive error handling and logging
  - Configurable timeout (30 seconds)
  - Exit codes for monitoring

### 3. GitHub Actions Workflow (`.github/workflows/keepalive.yml`)

- **Purpose**: Automated daily execution via GitHub Actions
- **Schedule**: Daily at 12:00 UTC (configurable)
- **Features**: Manual triggering, proper logging, environment variable support

## 🚀 Setup Instructions

### Option 1: GitHub Actions (Recommended)

1. **Push to GitHub**: Ensure your repository is on GitHub
2. **Set Site URL**:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add a new secret: `SITE_URL` with your production URL (e.g., `https://your-site.vercel.app`)
3. **Enable Actions**: The workflow will automatically start running daily
4. **Test Manually**: Go to Actions tab → "Supabase Keepalive" → "Run workflow"

### Option 2: Local Cron Job

1. **Test the script locally**:

   ```bash
   # Test with localhost (if running locally)
   npm run keepalive

   # Test with production URL
   SITE_URL=https://your-site.vercel.app npm run keepalive
   ```

2. **Set up cron job**:

   ```bash
   # Edit crontab
   crontab -e

   # Add this line (runs daily at 12:00 PM)
   0 12 * * * cd /path/to/your/project && SITE_URL=https://your-site.vercel.app node scripts/keepalive.js >> /var/log/keepalive.log 2>&1
   ```

### Option 3: External Monitoring Service

Use services like:

- **UptimeRobot**: Free monitoring with HTTP checks
- **Pingdom**: Website monitoring
- **StatusCake**: Free tier available

Set them to check `https://your-site.vercel.app/api/keepalive` daily.

## 🧪 Testing

### Test the API Endpoint

```bash
# Local testing
curl http://localhost:3000/api/keepalive

# Production testing
curl https://your-site.vercel.app/api/keepalive
```

Expected response:

```json
{
  "success": true,
  "message": "Supabase keepalive successful - database is active",
  "timestamp": "2024-01-15T12:00:00.000Z",
  "registrationCount": 42
}
```

### Test the Script

```bash
# Local test
npm run keepalive

# Production test
SITE_URL=https://your-site.vercel.app npm run keepalive
```

### Test GitHub Actions

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Supabase Keepalive" workflow
4. Click "Run workflow" button
5. Check the logs for success/failure

## 📊 Monitoring

### GitHub Actions Logs

- View execution history in the Actions tab
- Get email notifications on failure (configure in repository settings)
- Check logs for detailed execution information

### Script Output

The script provides detailed logging:

```
[2024-01-15T12:00:00.000Z] Starting Supabase keepalive...
[2024-01-15T12:00:00.000Z] Sending request to: https://your-site.vercel.app/api/keepalive
[2024-01-15T12:00:01.000Z] Response status: 200
[2024-01-15T12:00:01.000Z] ✅ Keepalive successful!
[2024-01-15T12:00:01.000Z] Message: Supabase keepalive successful - database is active
```

### Error Handling

- **Network errors**: Logged with details
- **HTTP errors**: Status codes and response bodies logged
- **Timeout errors**: 30-second timeout with clear error message
- **Database errors**: Supabase errors are caught and logged

## ⚙️ Configuration

### Environment Variables

- `SITE_URL`: Your production website URL (required for external execution)
- `VERCEL_URL`: Automatically detected in Vercel deployments

### Customization

- **Schedule**: Modify the cron expression in `.github/workflows/keepalive.yml`
- **Timeout**: Change `TIMEOUT` constant in `scripts/keepalive.js`
- **Endpoint**: Modify `KEEPALIVE_ENDPOINT` in the script if needed

## 🔧 Troubleshooting

### Common Issues

1. **"Request timeout" error**:

   - Check if your site is responding
   - Verify the URL is correct
   - Increase timeout in the script if needed

2. **"Database error" in API response**:

   - Check Supabase credentials in environment variables
   - Verify the `registrations` table exists
   - Check Supabase dashboard for connection issues

3. **GitHub Actions failing**:

   - Verify `SITE_URL` secret is set correctly
   - Check if the repository has Actions enabled
   - Review the workflow logs for specific errors

4. **Cron job not running**:
   - Verify cron service is running: `sudo service cron status`
   - Check cron logs: `grep CRON /var/log/syslog`
   - Ensure the script path is absolute

### Debug Mode

Enable verbose logging by modifying the script:

```javascript
// Add this at the top of keepalive.js
const DEBUG = true;
```

## 📈 Best Practices

1. **Multiple Methods**: Use GitHub Actions as primary, with external monitoring as backup
2. **Monitoring**: Set up notifications for failed keepalive attempts
3. **Testing**: Regularly test the system manually
4. **Logging**: Keep logs for troubleshooting
5. **Backup**: Consider multiple keepalive endpoints if you have multiple services

## 🔒 Security

- The keepalive endpoint only performs read operations
- No sensitive data is exposed in responses
- Uses minimal database queries to reduce resource usage
- Includes proper error handling to prevent information leakage

## 📝 Maintenance

- **Monthly**: Check GitHub Actions execution history
- **Quarterly**: Test manual execution and verify logs
- **When deploying**: Verify the keepalive endpoint works in production
- **URL changes**: Update `SITE_URL` secret in GitHub repository settings
