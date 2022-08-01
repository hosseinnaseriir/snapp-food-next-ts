import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

import { LoadMore, VendorCard } from "components";
import { fetchVendorsListAction } from "redux/slices/vendorsListSlice";
import { AppDispatch } from "redux/store";

const LoadScrollableVendors = ({ vendorsList }): any => {
  const [lastPosition, setLastPosition] = useState(0);
  const perPage: number = 10;

  const dispatch: AppDispatch = useDispatch();

  const loadProducts = useCallback(() => {
    dispatch(
      fetchVendorsListAction({
        page: (lastPosition + perPage) / perPage,
        pageSize: perPage,
        lat: 35.754,
        long: 51.328,
      })
    );
    setLastPosition(lastPosition + perPage);
  }, [lastPosition, vendorsList]);

  return (
    <InfiniteScroll
      dataLength={vendorsList.length}
      next={loadProducts}
      hasMore={true}
      loader={<LoadMore />}
    >
      <div className="flex flex-col">
        {vendorsList.map(
          ({ data, type }, index) =>
            type === "VENDOR" && (
              <VendorCard
                backgroundImage={data.backgroundImage}
                // Some vendors have the same ID as others!
                key={data.id + " " + index}
                title={data.title}
                defLogo={data.defLogo}
                rate={data.rate}
                voteCount={data.voteCount}
                description={data.description}
                isZFExpress={data.isZFExpress}
                deliveryFee={data.deliveryFee}
                bestCoupon={data.best_coupon}
                deliveryTime={data.deliveryTime}
              />
            )
        )}
      </div>
    </InfiniteScroll>
  );
};

LoadScrollableVendors.propTypes = {
  vendorsList: PropTypes.array,
};

export default LoadScrollableVendors;
