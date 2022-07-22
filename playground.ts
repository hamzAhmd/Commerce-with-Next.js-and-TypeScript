export function play() {
  type Greeting = { message: string };

  type InferHelloProps<T> = T extends () => Promise<{
    props: infer Props;
  }>
    ? Props
    : never;

  const getHelloProps = async function () {
    const greeting: Greeting = {
      message: 'Hello There!',
    };

    return {
      props: {
        greeting,
        data: {
          cars: ['car1', 'car2'],
        },
      },
    };
  };

  function sayHello(props: InferHelloProps<typeof getHelloProps>) {
    console.log(props.data.cars);
  }

  sayHello();
}
