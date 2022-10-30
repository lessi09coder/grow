import ItemListContainer from '../components/ItemListContainer';
import { UserLayout } from '../components/UserLayout';

export const Home = () => {
    return(
        <UserLayout>    
        <main>        
        
        <ItemListContainer />
        
        </main>
        
        
        <footer className='piedepagina'>
            <h3 className=''>Politica de privacidad</h3>
        </footer>  
    
        </UserLayout>
    )
        
}