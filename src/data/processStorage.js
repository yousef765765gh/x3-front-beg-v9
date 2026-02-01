import processData from "./ProcessDataAtSquar";
// هنا ملف تخزين مؤقت 

const STORAGE_KEY = "processCards";

// قراءة البيانات
export const getProcessCards = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(processData));
  return processData;
};

// تحديث البيانات
export const setProcessCards = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};