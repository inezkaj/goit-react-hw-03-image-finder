import { Component } from 'react';
import Searchbar from './searchbar.jsx';
import ImageGallery from './image_gallery.jsx';
// import Loader from './loader.jsx';
// import Button from './button.jsx';
// import Modal from './modal.jsx';
import axios from 'axios';
import '.././index.css';
// import ContentLoader from 'react-content-loader';

const KEY = '41214727-6303ae3029c738ec798387c7a';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selectedImageUrl: '',
      isModalOpen: false,
      isLoading: false,
    };

    this.search = this.search.bind(this);
  }

  search(query) {
    console.log(query);

    this.setState({
      query: query,
    });
  }

  fetchData = async (query, page = 1) => {
    this.setState({ isLoading: true });

    const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const data = await axios.get(url);
      this.setState(prevState => ({
        images:
          page === 1
            ? data.data.hits
            : [...prevState.images, ...data.data.hits],
        page: page + 1,
        query,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    //  finally {
    //   this.setState({ isLoading: false });
    // }
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.search}></Searchbar>
        <ImageGallery images={images} onClick={this.openModal} />
      </div>
    );
  }
}
