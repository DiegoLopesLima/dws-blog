import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import Button from "@/components/Button";
import Container from "@/components/Container";

function PostPage() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Button block>Apply filters</Button>

      <Button onClick={handleClickBack} variant="outline">
        <Icon icon="mdi:arrow-left" />
        Back
      </Button>

      <Button variant="outline">
        Category
        <Icon icon="mdi:chevron-down" />
      </Button>
    </Container>
  );
}

export default PostPage;
