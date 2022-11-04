import { Footer } from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer';
import { UserLayout } from '../components/UserLayout';

export const Home = () => {
    return(
        <UserLayout>    
        
        <main><ItemListContainer /></main>

        <Footer/>       
    
        </UserLayout>
    )
        
}