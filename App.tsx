import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./src/components/styles";
import Ball from "./src/components/Ball";

let timer: number;
export default function App() {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
    };
    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  function handleForceButton() {
    setUpForce(7);
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>
            UpForce:{` ${upForce.toFixed(2)}`}{" "}
          </Text>
          <Text style={styles.controlText}>
            Velocity:{` ${speed.toFixed(2)}`}{" "}
          </Text>
          <Text style={styles.controlText}>PosY:{` ${posY.toFixed(2)}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={styles.controlText}>Do Force</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function setState(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}
