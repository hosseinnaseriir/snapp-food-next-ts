export type QueryType = {
  page: number;
  pageSize: number;
  lat: number;
  long: number;
};

export type VendorCardType ={
    title:string,
    backgroundImage:string,
    defLogo:string,
    rate:number,
    voteCount:number,
    description:string,
    deliveryFee:number,
    isZFExpress:boolean,
    bestCoupon:boolean,
    deliveryTime:number,
}