import React from "react";
import styles from "./CssModule.module.scss";
const CSSModule = () => {
  return (
    //<div className={styles.wrapper}>
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요. 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;

/*css module이 적용된 스타일 파일을 불러오면 객체를 하나 전달받게 되는데 css module에서 사용한 클래스 이름과 해당이름을 고유화한 값이 키-값 형태로
들어있다. 

이 고유한 클래스 이름을 사용하려면 className={styles.[클래스 이름]으로 받아오면 된다.} 

- 2개 이상일 때에는 className={`${styles.wrapper} ${styles.inverted}`} 이런 식으로 받아오면 됨
- 위의 방법이 싫다면 className = {[styles.wrapper, styles.inverted].join(' ')}을 사용해도 됨
*/
