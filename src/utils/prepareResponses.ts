import { IAllPhones, IPhone } from "../types/phone.type";

const prepareResponseAllPhone = (phones: IPhone[]): IAllPhones[] => {
  const phonesResponse: IAllPhones[] = [];
  phones.forEach((item) => {
    const { _id, name, img, manuFacturer } = item;
    phonesResponse.push({
      id: _id,
      name,
      img: img || null,
      manuFacturer,
    });
  });

  return phonesResponse;
};

export { prepareResponseAllPhone };
