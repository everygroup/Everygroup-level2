import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import FontStyle from "../../Assets/Fonts/FontStyle";
import Icons from "react-native-vector-icons/Ionicons";
import MessangerModal from "./MessangerModal";
import { LinearGradient } from "expo-linear-gradient";
function Interface(props) {
  const navigation = useNavigation();
  const [modalValue, setModalValue] = useState(false);
  const [groupArray] = useState([
    {
      groupName: "Nordsee Gruppe 1",
      category: ["Dienstleistungen", "Interessen", "Unterhaltung"],
      hashtagData: ["test", "test", "test", "test", "test"],
      description: "Hey, wir sind eine nette Gruppe",
      groupType: "snapchat",
    },
    {
      groupName: "Nordsee Gruppe 2",
      category: ["Dienstleistungen", "Interessen", "Unterhaltung"],
      hashtagData: ["test", "test", "test", "test", "test"],
      description: "Hey, wir sind eine nette Gruppe",
      groupType: "whatsapp",
    },
    {
      groupName: "Nordsee Gruppe 3",
      category: ["Dienstleistungen", "Interessen", "Unterhaltung"],
      hashtagData: ["test", "test", "test", "test", "#test"],
      description: "Hey, wir sind eine nette Gruppe",
      groupType: "line",
    },
    {
      groupName: "Nordsee Gruppe 4",
      category: ["Dienstleistungen", "Interessen", "Unterhaltung"],
      hashtagData: ["test", "test", "test", "test", "test"],
      description: "Hey, wir sind eine nette Gruppe",
      groupType: "telegram",
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MessangerModal
        modalValue={modalValue}
        closeModal={() => setModalValue(false)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
      >
        {groupArray.map((item) => {
          return (
            <View style={{ height: height }}>
              <View
                style={[
                  styles.child,
                  { backgroundColor: "#fff", paddingTop: 10 },
                ]}
              >
                <View style={styles.subContainer}>
                  <View style={styles.header}>
                    <Icons
                      name={"close"}
                      color="#EF3E36"
                      size={35}
                      onPress={() => navigation.navigate("Dashboard")}
                    />

                    <TouchableWithoutFeedback
                      onPress={() => setModalValue(!modalValue)}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            color: "#205072",
                            fontSize: 18,
                            fontFamily: FontStyle.MontBold,
                          }}
                        >
                          Filter
                        </Text>
                        <Entypo name="chevron-down" size={30} color="#205072" />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.subHeader}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("OtherUserScreen")}
                      style={{
                        backgroundColor: "#FF6600",
                        padding: 10,
                        borderRadius: 8,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: FontStyle.MontBold,
                        }}
                      >
                        Superman98
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 6, borderRadius: 12 }}>
                      <Image
                        style={{ height: 50, width: 50, resizeMode: "contain" }}
                        source={
                          item.groupType === "whatsapp"
                            ? require("../../Assets/Images/whatsapp.png")
                            : item.groupType === "snapchat"
                            ? require("../../Assets/Images/snapchat.png")
                            : item.groupType === "telegram"
                            ? require("../../Assets/Images/telegram.png")
                            : item.groupType === "line"
                            ? require("../../Assets/Images/line.png")
                            : null
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.groupName}>{item.groupName}</Text>
                <View style={styles.categoryContainer}>
                  {item.category.map((item, index) => (
                    <View
                      style={{
                        backgroundColor: "#205072",
                        height: 20,
                        minWidth: 50,
                        maxWidth: "auto",
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 5,
                        borderRadius: 5,
                        paddingHorizontal: 5,
                      }}
                    >
                      <Text key={index.toString()} style={styles.category}>
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.hashtagContainer}>
                  {item.hashtagData.map((item) => (
                    <Text
                      style={{
                        color: "#FFA420",
                        margin: 3,
                        fontFamily: FontStyle.MontMedium,
                        fontSize: 14,
                      }}
                    >
                      #{item}
                    </Text>
                  ))}
                </View>

                <Text
                  style={{
                    color: "#205072",
                    fontSize: 15,
                    marginTop: 15,
                    marginLeft: 18,
                    fontFamily: FontStyle.MontMedium,
                  }}
                >
                  {item.description}
                </Text>
                <View style={styles.verticalIcons}>
                  <TouchableOpacity>
                    <Image
                      source={require("../../Assets/Images/share.png")}
                      style={{
                        height: 22,
                        width: 22,
                        resizeMode: "contain",
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../../Assets/Images/arrowBlank.png")}
                      style={{
                        height: 22,
                        width: 22,
                        resizeMode: "contain",
                        right: 5,
                        marginVertical: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../../Assets/Images/mediaArrow.png")}
                      style={{
                        height: 38,
                        width: 34,
                        resizeMode: "contain",
                        marginVertical: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../../Assets/Images/setting.png")}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain",
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <LinearGradient
                style
                colors={
                  item.groupType == "line"
                    ? ["#08C719", "#adebad"]
                    : item.groupType == "snapchat"
                    ? ["#FFFC00", "#ffffb3"]
                    : item.groupType == "whatsapp"
                    ? ["#08C719", "#9dfba5"]
                    : item.groupType == "telegram"
                    ? ["#058acd", "#9cdcfc"]
                    : ["#FFFC00", "#ffffb3"]
                }
                style={styles.button}
              >
                <Text
                  style={{
                    color: item.groupType == "snapchat" ? "#205072" : "#fff",
                    fontFamily: FontStyle.MontBold,
                    fontSize: 19,
                  }}
                >
                  Beitreten
                </Text>
              </LinearGradient>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  child: {
    height: height * 0.9,
    backgroundColor: "gray",
  },

  button: {
    backgroundColor: "#25D366",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    width: 224,
    height: 45,
    bottom: 30,
  },
  verticalIcons: {
    position: "absolute",
    right: 10,
    bottom: 150,
    alignItems: "center",
  },
  hashtagContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  category: {
    color: "#fff",
    fontSize: 10,
    fontFamily: FontStyle.MontBold,
  },
  categoryContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 30,
    fontSize: 12,
  },
  groupName: {
    fontSize: 25,
    color: "#205072",
    fontFamily: FontStyle.MontBold,
    marginTop: 25,
    marginLeft: 25,
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
    // backgroundColor: 'green',
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
  },
});

export default Interface;
