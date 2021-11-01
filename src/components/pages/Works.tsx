import { memo, VFC } from "react";

import { Stitle } from "../atoms/style/Stitle";
import { WorkCard } from "../organisms/card/WorkCard";
import IUserManagementApp from "../../image/UserManagementApp.png";
import IMyPortfolio from "../../image/MyPortfolio.png";
import IToDoList from "../../image/ToDoList.png";

export const Works: VFC = memo(() => {
  return (
    <>
      <Stitle>Works</Stitle>

      <WorkCard
        WorksUrl="https://usermanagementapp-5d8bc.web.app/"
        bgColor="white"
        src={IUserManagementApp}
        ImageContent="ユーザー管理風アプリです。ユーザー情報はjsonplaceholderのAPIを使って開発しました。"
        Language="#React #TypeScript #ChakraUI"
      />
      <WorkCard
        WorksUrl="https://todo-list-a4282.web.app/"
        bgColor="white"
        src={IToDoList}
        ImageContent="TODOリストです。はじめはJavaScriptでコードを書き、あとから勉強の為にReactに書き換えました。"
        Language="#JavaScript #React"
      />
      <WorkCard
        WorksUrl=""
        bgColor="white"
        src={IMyPortfolio}
        ImageContent="私のポートフォリオサイトです。インターンシップのために作成しました。"
        Language="#React #TypeScript #ChakraUI"
      />
    </>
  );
});
