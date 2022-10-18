import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// guards
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/account',
      element: <MainLayout />,
      children: [
        { element: <ProfilePage/>, path: 'profile/:id' },
        { element: <EditProfilePage />, path: 'edit' },
        { element: <AnalysticPage />, path: 'analytics' },
        { element: <LeaderBoardPage />, path: 'leader-board' }
      ],
    },
    {
      path: '/resources',
      element: <MainLayout />,
      children: [
        { element: <BeginnerPage />, index: true },
        { element: <BeginnerPage />, path: 'beginners' },
        { element: <CharitiesPage />, path: 'charities' },
        { element: <BrandsPage />, path: 'brands' },
        { element: <HelpCenterPage />, path: 'help' },
        { element: <LicensesPage />, path: 'licences' },
        { element: <PrivacyPolicy />, path: 'privacy' },
        { element: <CookiePolicy />, path: 'cookie' },
      ],
    },
    {
      path: '/corporate',
      element: <MainLayout />,
      children: [
        { element: <CorporatePage />, index: true },
        { element: <CorporatePage/>, path: 'corporate' },
        { element: <AboutUsPage />, path: 'about' },
        { element: <CreateLeadPage />, path: 'partners' },
      ],
    },
    {
      path: '/market-place',
      element: <MainLayout />,
      children: [
        { element: <NFTMarketplacePage />, index: true },
        { element: <Navigate to="/market-place" replace />, path: 'nft' },
        { element: <NFTCategoriesPage />, path: 'categories' },
        { element: <NFTCollectionPage />, path: 'collections' },
        { element: <NFTInCollectionPage />, path: 'collections/:collectionId' },
        { element: <MemberShipPage />, path: 'memberships' },
        { element: <CreateNFTPage />, path: 'create-nft' },
        { element: <ProductDetailPage />, path: 'product-detail/:id' },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));

// CORPORATE 
const AboutUsPage = Loadable(lazy(() => import('../pages/corporate/About')));
const CorporatePage = Loadable(lazy(() => import('../pages/corporate/Corporate')));
const CreateLeadPage = Loadable(lazy(() => import('../pages/corporate/CreateLead')));

// RESOURCES 
const BeginnerPage = Loadable(lazy(() => import('../pages/resources/Beginners')));
const CharitiesPage = Loadable(lazy(() => import('../pages/resources/Charities')));
const BrandsPage = Loadable(lazy(() => import('../pages/resources/Brands')));


// MARKET PLACES
const NFTCategoriesPage = Loadable(lazy(() => import('../pages/marketplace/NFTCategories')));
const LeaderBoardPage = Loadable(lazy(() => import('../pages/marketplace/LeaderBoards')));
const NFTMarketplacePage = Loadable(lazy(() => import('../pages/marketplace/NFTMarketplace')));
const ProductDetailPage =  Loadable(lazy(() => import('../pages/marketplace/ProductDetail')));
const MemberShipPage = Loadable(lazy(() => import('../pages/marketplace/MemberShipPage')));
const CreateNFTPage = Loadable(lazy(() => import('../pages/marketplace/CreateNFT')));

// BLOGS
const BlogPage =  Loadable(lazy(() => import('../pages/Blog')));

const NFTCollectionPage = Loadable(lazy(() => import('../pages/NFTCollection')));
const NFTInCollectionPage = Loadable(lazy(() => import('../sections/NFT/collections/NFTInCollection')));

// ACOUNT ROUTES
const ProfilePage = Loadable(lazy(() => import('../pages/account/Profile')));
const EditProfilePage = Loadable(lazy(() => import('../pages/account/EditProfile')));
const AnalysticPage = Loadable(lazy(() => import('../pages/account/Analystic')));
const HelpCenterPage = Loadable(lazy(() => import('../pages/resources/HelpCenter')));
const LicensesPage = Loadable(lazy(() => import('../pages/resources/Licences')));
const PrivacyPolicy = Loadable(lazy(() => import('../pages/resources/PrivacyPolicy')));
const CookiePolicy = Loadable(lazy(() => import('../pages/resources/CookiePolicy')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
