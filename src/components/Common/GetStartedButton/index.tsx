import { StyledButton } from "./styles";

const GetStartedButton = ({ padding }: { padding: string }) => {
  const scrollToJoinSection = () => {
    const element = document.getElementById("join");
    if (element) {
      const headerOffset = 100; // Offset to account for fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledButton
      style={{
        padding: padding,
      }}
      onClick={scrollToJoinSection}
    >
      Get Started
    </StyledButton>
  );
};

export default GetStartedButton;
