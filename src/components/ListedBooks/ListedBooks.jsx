import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooksCard from '../ReadBooksCard/ReadBooksCard';
import WishListBooksCard from '../WishListBooksCard/WishListBooksCard';

const ListedBooks = () => {  
    return (
        <div className="py-5 px-7">
            <h1 className="text-3xl font-bold text-center bg-slate-300 py-5 rounded-2xl">Books</h1>
            <Tabs className="py-7">
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>
                <TabPanel>
                    <ReadBooksCard></ReadBooksCard>
                </TabPanel>
                <TabPanel>
                    <WishListBooksCard></WishListBooksCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;