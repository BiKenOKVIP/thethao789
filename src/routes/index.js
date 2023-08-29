import BongDa from '~/pages/BongDa';
import BongDaVietNam from '~/pages/BongDaVietNam';
import Home from '~/pages/Home';
import NhanDinhBongDa from '~/pages/NhanDinhBongDa';
import TinBongDa from '~/pages/TinBongDa';
import Esports from '~/pages/Esports';
import NotFound from '~/pages/NotFound';
import DetailNews from '~/pages/DetailNews';
import DuLieuTranDau from '~/pages/DuLieuTranDau';

const publicRoutes = [
    { path: '/thethao789bet/', component: Home },
    { path: '/thethao789bet/bong-da', component: BongDa },
    { path: '/thethao789bet/nhan-dinh-bong-da', component: NhanDinhBongDa },
    { path: '/thethao789bet/tin-bong-da', component: TinBongDa },
    { path: '/thethao789bet/bong-da-viet-nam', component: BongDaVietNam },
    { path: '/thethao789bet/esports', component: Esports },
    { path: '/thethao789bet/detail/:postId', component: DetailNews },
    { path: '/thethao789bet/du-lieu-bong-da/:id', component: DuLieuTranDau },
    { path: '/thethao789bet/du-lieu-bong-da', component: DuLieuTranDau },
    { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
