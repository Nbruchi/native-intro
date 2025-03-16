# Presentation

## 1️⃣View Component
- **Purpose**: Basic container for UI elements.
- **Usage**: Wrapping and organizing content.
- **Example**:
  ```jsx
  import { View } from 'react-native';
  <View style={{ padding: 20 }}>
    <Text>Content</Text>
  </View>
  ```

---

## 2️⃣ **Text Component**
- **Purpose**: Render text.
- **Usage**: Display text with various styles.
- **Example**:
  ```jsx
  import { Text } from 'react-native';
  <Text style={{ fontSize: 20 }}>Hello World</Text>
  ```

---

## 3️⃣ **Image Component**
- **Purpose**: Display images.
- **Usage**: Use with `source` prop to load images.
- **Example**:
  ```jsx
  import { Image } from 'react-native';
  <Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 100, height: 100 }} />
  ```

---

## 4️⃣ **Touchable Components**
- **Purpose**: Make elements interactive (e.g., button-like behavior).
- **Common Types**:
    - `TouchableOpacity`, `TouchableHighlight`, `TouchableWithoutFeedback`
- **Example**:
  ```jsx
  import { TouchableOpacity } from 'react-native';
  <TouchableOpacity onPress={() => alert('Pressed')}>
    <Text>Click Me</Text>
  </TouchableOpacity>
  ```

---

## 5️⃣ **Button Component**
- **Purpose**: Simple button UI element.
- **Usage**: Common for form submissions or basic actions.
- **Example**:
  ```jsx
  import { Button } from 'react-native';
  <Button title="Submit" onPress={() => alert('Submitted')} />
  ```

---

## 6️⃣ **Alert**
- **Purpose**: Display simple modal dialogs.
- **Usage**: Show alerts with options like `OK`, `Cancel`.
- **Example**:
  ```jsx
  import { Alert } from 'react-native';
  Alert.alert('Title', 'Message', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
  ```

---

## 7️⃣ **StyleSheet**
- **Purpose**: Style components in React Native.
- **Usage**: Define styles using `StyleSheet.create()` for performance benefits.
- **Example**:
  ```jsx
  import { StyleSheet, View, Text } from 'react-native';
  const styles = StyleSheet.create({
    container: { padding: 20 },
    text: { color: 'blue' },
  });
  <View style={styles.container}>
    <Text style={styles.text}>Styled Text</Text>
  </View>
  ```

---

## 8️⃣ **Platform-Specific Code**
- **Purpose**: Write platform-specific code for iOS and Android.
- **Usage**: Use `Platform` module to differentiate between platforms.
- **Example**:
  ```jsx
  import { Platform, Text } from 'react-native';
  const platformText = Platform.OS === 'ios' ? 'iOS' : 'Android';
  <Text>{platformText}</Text>
  ```

---

## 9️⃣ **Reusable Components**
- **Purpose**: Build modular components for reusability.
- **Example**:
  ```jsx
  const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
  ```

---

## 🔟 **State Management**

### **Local State with `useState` Hook**
- **Purpose**: Manage state within a single component.
- **Usage**: Common for small apps.
- **Example**:
  ```jsx
  const [count, setCount] = useState(0);
  ```

---

### **Context API**
- **Purpose**: Share state across components without prop-drilling.
- **Usage**: Simple global state.
- **Example**:
  ```jsx
  const CountContext = createContext();
  const { count, setCount } = useContext(CountContext);
  ```

---

### **Redux**
- **Purpose**: Manage complex global state.
- **Usage**: Large apps with shared state.
- **Example**:
  ```jsx
  const store = createStore(counterReducer);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  ```

---

### **MobX**
- **Purpose**: Observable state with automatic reactivity.
- **Usage**: For real-time updates.
- **Example**:
  ```jsx
  class CounterStore {
    count = 0;
    increment() {
      this.count += 1;
    }
  }
  const counterStore = new CounterStore();
  ```

---

### **Zustand**
- **Purpose**: Minimal state management with a small API.
- **Usage**: Lightweight, easy to use.
- **Example**:
  ```jsx
  const useStore = create(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 }))
  }));
  ```

---

## 🌱 **Quick Tips**
- **`useState`**: Best for local state.
- **Context API**: Avoid prop-drilling by sharing global state.
- **Redux**: Centralized state for large and complex apps.
- **MobX**: Automatic state updates with observables.
- **Zustand**: Simple, minimalistic, and fast state management.
```

---