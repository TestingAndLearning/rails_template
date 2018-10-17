class BookApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    var self = this;
    $.ajax({
      url: '/api/books',
      success: function(data) {
        self.setState({ error: false, isLoaded: true, books: data});
      },
      error: function(xhr, status, error) {
        self.setState({ error: false, isLoaded: true, status: error});
        alert('Cannot get book data from API: '+ error);
      }
    });
  }

  render() {
    const { error, isLoaded, books } = this.state;

    if (error) {
      const { error, isLoaded, status } = this.state;
      return (<div>Error: {status}</div>);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <h1>Books</h1>
          <div className="row">
            <div className="col-md-12">
              Your books will go here!
            </div>
          </div>
        </div>
      );
    }
  }
}
