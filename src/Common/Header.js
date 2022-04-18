import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import LottieView from "lottie-react-native";
import Icons from "react-native-vector-icons/Fontisto";
import AddGroup from "./HeaderPages/AddGroup";
import Menu from "./HeaderPages/Menu";
import Search from "./HeaderPages/Search";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Header = ({ selectionOption, closeAddGroup }) => {
  const navigation = useNavigation();
  const [opacity] = useState(new Animated.Value(1));
  const [starValue, setStarValue] = useState(false);
  const [filterValue, setFilterValue] = useState(false);
  const [currentSelectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(selectionOption);
  }, [selectionOption]);

  const menuIconPress = (value) => {
    if (value == "") {
      setSelectedOption(value);
    } else if (value == currentSelectedOption) {
      setSelectedOption("");
    } else {
      setSelectedOption(value);
    }
  };

  const startAnimation = () => {
    menuIconPress("search");
    onClick();
  };

  const callback = useCallback((value) => {
    menuIconPress("");
  }, []);

  //code of search animated icon

  const [showAnimate, setShowAnimate] = useState(false);
  const onClick = () => setShowAnimate(!showAnimate);
  const animation = useRef(null);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      if (showAnimate) {
        animation.current.play(97, 97);
      } else {
        animation.current.play(100, 100);
      }
      isFirstRun.current = false;
    } else if (showAnimate) {
      animation.current.play(105, 130);
    } else {
      animation.current.play(59, 100);
    }
  }, [showAnimate]);

  //code for menu animated icon
  const [Animate, setAnimate] = useState(false);
  const onShow = () => setAnimate(!Animate);
  const newanimation = useRef(null);
  const FirstRun = useRef(true);
  useEffect(() => {
    if (FirstRun.current) {
      if (Animate) {
        newanimation.current.play(97, 97);
      } else {
        newanimation.current.play(100, 100);
      }
      FirstRun.current = false;
    } else if (Animate) {
      newanimation.current.play(15, 100);
    } else {
      newanimation.current.play(0, 100);
    }
  }, [Animate]);

  //code for plus animated icon

  const [plusAnimate, setplusAnimate] = useState(false);
  const onplus = () => setplusAnimate(!plusAnimate);
  const plusanimation = useRef(null);
  const FirstRun2 = useRef(true);

  useEffect(() => {
    if (FirstRun2.current) {
      if (plusAnimate) {
        plusanimation.current.play(97, 97);
      } else {
        plusanimation.current.play(100, 100);
      }
      FirstRun2.current = false;
    } else if (plusAnimate) {
      plusanimation.current.play(15, 100);
    } else {
      plusanimation.current.play(0, 100);
    }
  }, [plusAnimate]);

  return (
    <View
      style={{
        height:
          currentSelectedOption == "menu"
            ? 320
            : currentSelectedOption == "search" && filterValue
            ? height
            : currentSelectedOption == "search"
            ? 135
            : currentSelectedOption == "plus"
            ? height
            : 59,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#FF9700",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: "absolute",
        marginTop: 35,
        zIndex: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#FF9700",
          flexDirection: "row",
          paddingHorizontal: "2.5%",
        }}
      >
        <View
          style={{
            width: "52%",
            height: "100%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Image
              source={require("../Assets/Images/whiteLogo.png")}
              style={{ height: 31, width: 31, top: 15, left: 5 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "46%",
            height: "100%",
            flexDirection: "row",
            top: 15,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              menuIconPress("plus"), onplus();
            }}
          >
            {currentSelectedOption == "plus" ? (
              <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={() => {
                  menuIconPress("plus"), onplus();
                }}
              >
                <LottieView
                  ref={plusanimation}
                  style={styles.search}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/plusend.json")}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={() => {
                  menuIconPress("plus"), onplus();
                }}
              >
                <LottieView
                  ref={plusanimation}
                  style={styles.search}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/plusstart.json")}
                />
              </TouchableWithoutFeedback>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              menuIconPress("search"), startAnimation();
            }}
          >
            {showAnimate ? (
              <TouchableWithoutFeedback onPress={startAnimation}>
                <LottieView
                  ref={animation}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/search.json")}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={startAnimation}>
                <LottieView
                  ref={animation}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/searchend.json")}
                />
              </TouchableWithoutFeedback>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              menuIconPress("menu"), onShow();
            }}
          >
            {currentSelectedOption == "menu" ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  menuIconPress("menu"), onShow();
                }}
              >
                <LottieView
                  ref={newanimation}
                  style={styles.search}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/menustart.json")}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => {
                  menuIconPress("menu"), onShow();
                }}
              >
                <LottieView
                  ref={newanimation}
                  style={styles.search}
                  autoPlay={false}
                  loop={false}
                  source={require("../Assets/animation/menuend.json")}
                />
              </TouchableWithoutFeedback>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {currentSelectedOption == "menu" ? (
        <Menu onPressMenu={() => setSelectedOption("")} />
      ) : currentSelectedOption == "plus" ? (
        <View style={{ paddingTop: "5%" }}>
          <AddGroup />
        </View>
      ) : currentSelectedOption == "search" ? (
        <View style={{ height: "100%" }}>
          <Search
            starPress={() => setStarValue(!starValue)}
            starValue={starValue}
            filterPress={() => setFilterValue(!filterValue)}
            filterValue={filterValue}
            parentCallBack={callback}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
