import { Link } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <View>
      <Text>There will be dragons</Text>
      <Link href={"/about"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={{ fontSize: 18 }}>Open about</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>

      <Link href={"/util/disclaimer"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={{ fontSize: 18 }}>Open disclaimer</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>

      <Link href={"/tabs/list"} replace asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={{ fontSize: 18 }}>Open tabs</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>

      <Link href={"/drawer/list"} replace asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={{ fontSize: 18 }}>Open drawer</Text>
          <Ionicons name="arrow-forward" size={18} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};
export default Page;
