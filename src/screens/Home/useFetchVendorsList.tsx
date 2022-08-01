import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchVendorsListAction } from "redux/slices/vendorsListSlice";
import { toast } from "react-toastify";
import { QueryType } from '@types';
import { AppDispatch, RootState } from "redux/store";

function useFetchVendorsList(): any {
  const dispatch: AppDispatch = useDispatch();
  const { vendorsList, rejected
  } = useSelector(
    (store: RootState) => store.vendorsListSlice
  );

  useEffect(() => {
    dispatch(
      fetchVendorsListAction({
        page: 0,
        pageSize: 10,
        lat: 35.754,
        long: 51.328,
      })
    );
  }, []);
  useEffect(() => {
    if (rejected.status) toast.error(rejected.message);
  }, [rejected]);
  return { vendorsList };
}

export default useFetchVendorsList;
