import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // التمرير إلى الأعلى
    }, [pathname]); // إعادة التشغيل عند تغيير pathname

    return null; // لا تحتاج إلى إرجاع أي شيء
}

export default ScrollToTop;