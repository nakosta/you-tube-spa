import { Typography, Image } from "antd";

const { Text, Title, Paragraph } = Typography;

const redTextStyle = {
  backgroundColor: "#e5e3e3",
  color: "#f5222d",
  padding: "3px 6px",
  fontWeight: "bold",
  borderRadius: "5px",
};

const Components = () => {
  return (
    <>
      <Image
        width={70}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f9ca.svg"
      />
      <Title>Components</Title>
      <Paragraph>
        <Text style={redTextStyle}>Компоненты</Text> - это небольшие,
        <Text strong> переиспользуемые элементы</Text> пользовательского
        интерфейса, которые объединены вместе, чтобы создать более крупные
        приложения.
      </Paragraph>
      <Paragraph>
        Компоненты позволяют разбить интерфейс на независимые части,
        <Text strong> про которые легко думать в отдельности.</Text> Например,
        всем известный интерфейс можно разбить на такие компоненты:
      </Paragraph>
      <Image
        style={{ width: "100%" }}
        src="https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc006f7c1-a10b-4e8a-8535-0dd76b6cd6fc%2FUntitled.png?table=block&id=f8be0431-a209-433e-aa4b-671af91afd3d&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=1420&userId=&cache=v2"
      />
      <Paragraph>
        Во многом компоненты ведут себя
        <Text strong> как обычные функции JavaScript.</Text> Они принимают
        произвольные входные данные (<Text italic>так называемые «пропсы»</Text>
        ) и возвращают React-элементы, описывающие, что мы хотим увидеть на
        экране.
      </Paragraph>
      <Paragraph>
        Компоненты как кирпичики из которых ты можешь строит свое приложение
      </Paragraph>
      <Image
        style={{ width: "100%" }}
        src="https://redev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6661104d-9510-4a9e-8688-ef35a5d42a1d%2F1ec2ba02-6ed2-4d7f-8fda-2d70e8e348d6%2FUntitled.jpeg?table=block&id=b892a9c0-c256-4dc1-8997-b2a46c2d1782&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=1420&userId=&cache=v2"
      />
    </>
  );
};

export default Components;
