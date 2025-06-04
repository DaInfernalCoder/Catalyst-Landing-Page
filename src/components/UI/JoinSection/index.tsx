"use client";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wrapper,
  Inner,
  Header,
  FormContainer,
  Form,
  FormField,
  Label,
  Input,
  Select,
  TextArea,
  ErrorMessage,
  SubmitButton,
  LoadingSpinner,
  SuccessMessage,
  RevealCover,
  CheckIconContainer,
  CheckIcon,
  SuccessButton,
} from "./styles";
import { MaskText, ConfettiShower } from "@/components";
import {
  desktopHeaderPhrase,
  formFields,
  initialFormData,
  validateForm,
  FormData,
  FormErrors,
} from "./constants";

const JoinSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          // Handle validation errors from server
          setErrors(result.errors);
        } else {
          // Handle general error
          setErrors({
            general:
              result.message || "Something went wrong. Please try again.",
          });
        }
        return;
      }

      // Success - show success state and trigger confetti
      setIsSubmitted(true);
      setShowConfetti(true);
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  const revealVariants = {
    hidden: { width: "100%" },
    visible: {
      width: "0%",
      transition: {
        duration: 1.4,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
        staggerChildren: 0.1,
      },
    },
  };

  if (isSubmitted) {
    return (
      <>
        <ConfettiShower
          isActive={showConfetti}
          onComplete={() => setShowConfetti(false)}
        />
        <Wrapper>
          <Inner>
            <Header>
              <MaskText
                phrases={["Thank you for", "joining Catalyst!"]}
                tag="h1"
              />
            </Header>
            <FormContainer
              $isSuccess={true}
              variants={successVariants}
              initial="hidden"
              animate="visible"
            >
              <SuccessMessage>
                <CheckIconContainer
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                >
                  <CheckIcon
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </CheckIcon>
                </CheckIconContainer>
                <h3>Welcome to the Community!</h3>
                <p>
                  We&apos;ve received your application and will be in touch
                  soon. Get ready to connect with ambitious students and build
                  something amazing together.
                </p>
                <SuccessButton
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Application
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </SuccessButton>
              </SuccessMessage>
            </FormContainer>
          </Inner>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <ConfettiShower
        isActive={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />
      <Wrapper ref={ref}>
        <Inner>
          <Header>
            <MaskText phrases={desktopHeaderPhrase} tag="h1" />
          </Header>
          <FormContainer
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <RevealCover
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
            <Form onSubmit={handleSubmit}>
              {errors.general && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginBottom: "1rem", textAlign: "center" }}
                >
                  {errors.general}
                </ErrorMessage>
              )}
              {formFields.map((field, index) => (
                <FormField
                  key={field.name}
                  variants={fieldVariants}
                  custom={index}
                >
                  <Label htmlFor={field.name}>
                    {field.label}
                    {field.required && " *"}
                  </Label>

                  {field.type === "select" ? (
                    <Select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={errors[field.name] ? "error" : ""}
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  ) : field.type === "textarea" ? (
                    <TextArea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={errors[field.name] ? "error" : ""}
                      rows={4}
                    />
                  ) : (
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={errors[field.name] ? "error" : ""}
                    />
                  )}

                  {errors[field.name] && (
                    <ErrorMessage
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors[field.name]}
                    </ErrorMessage>
                  )}
                </FormField>
              ))}

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <LoadingSpinner
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ) : (
                  "Join Catalyst"
                )}
              </SubmitButton>
            </Form>
          </FormContainer>
        </Inner>
      </Wrapper>
    </>
  );
};

export default JoinSection;
