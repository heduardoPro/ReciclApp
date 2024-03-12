import React from "react";

import Logo from "../../components/Logo";
import Card from "../../components/Card";

import { Container, ViewBonus, ViewHeader } from "./styles";
import Title from "../../components/Title";
import CardBonus from "@components/CardBonus";
import { View } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
export interface BonusType {
  icon: string;
  title: string;
}

export default function Home() {
  const arrayBonus: BonusType[] = [
    {
      icon: require("../../assets/images/Convertion.png"),
      title: "Conversão de saldos",
    },
    {
      icon: require("../../assets/images/arrows.png"),
      title: "Troque por bonus",
    },
    {
      icon: require("../../assets/images/walletMoney.png"),
      title: "Saldo do bonus",
    },
  ];

  return (
    <Container>
      <ViewHeader>
        <Logo width={220} height={40} />
      </ViewHeader>
      <Animated.View entering={SlideInLeft.duration(400)}>
        <Card title="Saldo Total" value={"99.999.99,99"} />
      </Animated.View>
      <Animated.View entering={SlideInLeft.duration(400).delay(200)}>
        <ViewBonus>
          <Title text="Bônus:" size={24} />
          <View style={{ flexDirection: "row", gap: 24, marginTop: 12 }}>
            {arrayBonus.map((bonus, index) => {
              return <CardBonus BonusData={bonus} key={index} />;
            })}
          </View>
        </ViewBonus>
      </Animated.View>
    </Container>
  );
}
