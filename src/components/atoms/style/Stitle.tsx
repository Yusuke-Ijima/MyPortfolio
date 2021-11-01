import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Stitle: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "40px",
          margin: "40px",
        }}
      >
        {children}
      </h1>
    </>
  );
});
