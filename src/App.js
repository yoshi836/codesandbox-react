import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import "./styles.css";

export default function App() {
  console.log("APP");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  /**
   *  コンポーネントにmemoを使用していても、propsで関数を渡す場合に、
   *  毎回新しい関数を生成しているため、差分と見なされ再レンダリングされてしまう。
   *  useCallbackを使用し、関数をmemo化することで不要な再レンダリングはされない。
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  /** useMemo：変数のmemo化 */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle />
      <CssModules />
    </div>
  );
}
