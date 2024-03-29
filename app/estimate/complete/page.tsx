import React from "react";
import CompleteUnion from "@/components/union/completeUnion";
import { indention } from "@/helpers/indention";

const Complete = () => {
  const estimateSentence =
    "返信までに数日かかる場合がございます。返信が来ているかは、返信BOXをご覧ください。";
  const formattedSentence: string = indention(estimateSentence);
  const formattedTitle: string = indention("お見積り 依頼ありがとうございました")
  return (
    <>
      <CompleteUnion
        title={formattedTitle}
        sentence={formattedSentence}
        buttonColor="white"
        buttonText="返信BOXを見る"
        href={`/questions`}
        isSecondButton
        secondButtonColor="orange"
        secondButtonText="再度見積もる"
        secondHref={`/estimate`}
      />
    </>
  );
};

export default Complete;
