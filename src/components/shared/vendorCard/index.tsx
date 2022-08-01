import React from "react";
import PropTypes from "prop-types";
import { svgs } from "assets/svgs/index";
import { VendorCardType } from '@types'
import styles from "./styles.module.scss";

function Index({
  title,
  backgroundImage,
  defLogo,
  rate,
  voteCount,
  description,
  deliveryFee,
  isZFExpress,
  bestCoupon,
  deliveryTime,
}: VendorCardType): React.ReactElement {
  return (
    <figure className={styles['vendor-card']}>
      <img src={backgroundImage} alt="" />
      {bestCoupon && <p className={styles['best-coupon']}>{bestCoupon}</p>}
      <figcaption>
        <div className={styles['vendor-logo']}>
          <img src={defLogo} alt="" />
        </div>
        <div className={styles['vendor-title']}>
          <div className={styles['vendor-name']}>
            <h4>{title}</h4>
            {/* 
              <span className="badge">تا 20%</span>
              {svgs.satars} 
            */}
          </div>
          <div className={styles['vendor-rate']}>
            <span>({voteCount})</span>
            <span className={styles['rate-number'] + ' ' + styles['badge']}>
              {rate} {svgs.star}{" "}
            </span>
          </div>
        </div>
        <p className={styles['vendor-tags']}>{description}</p>
        <div className={styles['delivery-options']}>
          <div>
            <span className={styles['delivery-type']}>
              {" "}
              {!isZFExpress ? "پیک فروشنده" : "ارسال اکسپرس"}
            </span>
            <span>{deliveryFee} تومان</span>
          </div>
          {deliveryTime > 0 && (
            <div className={styles['delivery-time']}>
              <span>تا {deliveryTime} دقیقه</span>
              {svgs.time}{" "}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

Index.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  defLogo: PropTypes.string,
  rate: PropTypes.number,
  voteCount: PropTypes.number,
  description: PropTypes.string,
  deliveryFee: PropTypes.number,
  isZFExpress: PropTypes.bool,
  bestCoupon: PropTypes.string,
  deliveryTime: PropTypes.number,
};

export default Index;