import { memo, VFC } from "react";

import { Stitle } from "../atoms/style/Stitle";
import { SkillCard } from "../organisms/card/SkillCard";

export const Skill: VFC = memo(() => {
  return (
    <>
      <Stitle>Skill</Stitle>

      <SkillCard
        bgColor="orange.200"
        leftContent="HTML&CSS"
        rightContent="私がフロントエンド領域で初めて触れた技術です。サイトの模写コーディングなどをして学びました。"
      />
      <SkillCard
        bgColor="yellow.200"
        leftContent="JavaScript"
        rightContent="HTML/CSSと全く違う技術で困惑しましたが、初めて動的なサイトをコーディングしたときは達成感がありました。"
      />
      <SkillCard
        bgColor="blue.200"
        leftContent="React"
        rightContent="もっとJavaScriptを学びたいと思いReactを学びました。SPAという技術に初めて触れたのもReactでした。"
      />

      <SkillCard
        bgColor="cyan.200"
        leftContent="TypeScript"
        rightContent="Reactに相性がいいということで学んでいます。型付け言語を触れたのは初めてで、面白い技術だと思いました。"
      />

      <SkillCard
        bgColor="red.100"
        leftContent="これから学ぶスキル"
        rightContent="git/github,firebaseなど"
      />
    </>
  );
});
