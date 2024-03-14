import { PartnerPreviewItem } from "@/interfaces/partners.interface";

export interface PartnerItemResponse {
  partners: {
    data: PartnerPreviewItem[];
  };
  partner: {
    data: PartnerPreviewItem;
  };
}
