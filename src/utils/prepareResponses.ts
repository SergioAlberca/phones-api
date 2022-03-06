import { IAllPhones, IPhone } from "../types/phone.type";

const prepareResponseAllPhone = (phones: IPhone[]): IAllPhones[] => {
  const phonesResponse: IAllPhones[] = [];
  phones.forEach((item) => {
    phonesResponse.push({
      name: item.name,
      img: item.img || null,
      manuFacturer: item.manuFacturer,
    });
  });

  return phonesResponse;
};

export { prepareResponseAllPhone };
