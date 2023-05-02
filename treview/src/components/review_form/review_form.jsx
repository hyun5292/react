import React, { useRef } from "react";
import styles from "./review_form.module.css";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";
import { RiText } from "react-icons/ri";
import { TbBuildingFactory2 } from "react-icons/tb";

const ReviewForm = ({ BIZPLC_NM, today, uEmail, btnList }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const now = new Date(today);
  const timeToShow =
    now.getFullYear() +
    "년 " +
    (now.getMonth() + 1) +
    "월 " +
    now.getDate() +
    "일";

  const checkEmpty = () => {
    if (titleRef.current.value === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    } else if (contentRef.current.value === "") {
      alert("내용을 입력해주세요!");
      contentRef.current.focus();
    } else return true;
    return false;
  };

  return (
    <div className={styles.review_form}>
      <div className={styles.factory_name}>
        <TbBuildingFactory2 />
        {BIZPLC_NM}
      </div>
      <div className={styles.input_cont}>
        <div className={styles.input_item}>
          <RiText className={styles.icon} />
          :&nbsp;
          <input
            ref={titleRef}
            className={styles.rTitle}
            name="rTitle"
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.input_item}>
          <MdOutlinePermIdentity className={styles.icon} />
          :&nbsp;
          <span className={styles.mId}>{uEmail}</span>
        </div>
        <div className={styles.input_item}>
          <MdOutlineDateRange className={styles.icon} />
          :&nbsp;
          <span className={styles.rDate}>{timeToShow}</span>
        </div>
        <textarea
          ref={contentRef}
          className={styles.review_textarea}
          name="rContent"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>
      <div className={styles.btnForm}>
        {btnList &&
          btnList.map((btnItem) => {
            return (
              <button
                key={btnItem.btnKey}
                className={styles.btnItem}
                onClick={() => {
                  if (checkEmpty())
                    btnItem.btnClick({
                      rTitle: titleRef.current.value,
                      rContent: contentRef.current.value,
                    });
                }}
              >
                <span>{btnItem.btnTitle}</span>
                &nbsp;
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default ReviewForm;
