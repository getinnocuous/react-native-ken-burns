import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  duration?: number;
  friction?: number;
  tension?: number;
  min?: number;
  max?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default class KenburnsView extends React.Component<Props> {}
