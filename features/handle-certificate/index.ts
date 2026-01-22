import { useState } from "react";

export const useShowCertificate = () => {
  const [showCertificate, setShowCertificate] = useState<number | null>(null);
  const handleShowCertificate = (id: number | null) => {
    setShowCertificate(id);
  };

  return { showCertificate, handleShowCertificate };
};
