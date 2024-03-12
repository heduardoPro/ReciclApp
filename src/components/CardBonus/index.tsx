import { BonusType } from "@screens/home";
import { Container, Icon, TextCard } from "./styles";
import { Image, View } from "react-native";
interface CardBonusProps {
  BonusData: BonusType;
}
export default function CardBonus({ BonusData }: CardBonusProps) {
  return (
    <View style={{ gap: 8, alignItems: "center" }}>
      <Container>
        <Image source={BonusData.icon} width={45} height={45} />
      </Container>
      <TextCard>{BonusData.title}</TextCard>
    </View>
  );
}
