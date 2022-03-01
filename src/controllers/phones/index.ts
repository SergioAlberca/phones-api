import { Response, Request } from "express";
import { IPhone } from "../../types/phone.type";
import Phone from "../../models/phone";
import { getImageEncode } from "../../utils/utils";

const getPhones = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const phones: IPhone[] = await Phone.find();
    res.status(200).json({ phones });
  } catch (error) {
    throw error;
  }
};

const addPhone = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IPhone, "name" | "description" | "price" | "color" | "processor" | "ram" | "screen" | "manuFacturer">;
    const phone: IPhone = new Phone({
      color: body.color,
      description: body.description,
      manuFacturer: body.manuFacturer,
      name: body.name,
      price: body.price,
      processor: body.processor,
      ram: body.ram,
      screen: body.screen,
      ...(getImageEncode(req) && { img: getImageEncode(req) }),
    });

    const newPhone: IPhone = await phone.save();

    res.status(201).json(newPhone);
  } catch (error) {
    throw error;
  }
};

const getPhoneDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const phone: IPhone | null = await Phone.findById({ _id: id });

    res.status(phone ? 200 : 404).json({ phone });
  } catch (error) {
    throw error;
  }
};

const updatePhone = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body
    } = req;
  
    const updatePhone: IPhone | null = await Phone.findByIdAndUpdate(
      {_id: id},
      body
    );

    res.status(updatePhone ? 200 : 404).json({
      phone: updatePhone,
    });
  } catch (error) {
    throw error;
  }
};

const deletePhone = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPhone: IPhone | null = await Phone.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedPhone,
    });
  } catch (error) {
    throw error;
  }
};

export { getPhones, addPhone, updatePhone, deletePhone, getPhoneDetail };
