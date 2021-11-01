import { memo, VFC } from "react";

import { Stitle } from "../atoms/style/Stitle";

export const Page404: VFC = memo(() => {
  return (
    <Stitle>
      Page 404
      <br />
      お手数ですが、もう1度やり直してください。
    </Stitle>
  );
});
