import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  descripton: string;
  icon: React.ComponentType<IconProps>;
}

export function Info({ icon: Icon, descripton }: Props) {
  return (
    <View style={s.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={s.text}>{descripton}</Text>
    </View>
  )
}