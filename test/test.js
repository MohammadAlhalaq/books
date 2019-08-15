const test = require('tape');
const { render } = require('./../src/views/helpers');

const actual = {
  kind: 'books#volumes',
  totalItems: 473,
  items: [
    {
      kind: 'books#volume',
      id: 'MKhbLPHRb78C',
      etag: 'Hl2r+XapAZ0',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/MKhbLPHRb78C',
      volumeInfo: {
        title: 'The VC-1 and H.264 Video Compression Standards for Broadband Video Services',
        authors: [
          'Jae-Beom Lee',
          'Hari Kalva',
        ],
        publisher: 'Springer Science & Business Media',
        publishedDate: '2008-12-18',
        description: 'This book covers the MPEG H.264 and MS VC-1 video coding standards as well as issues in broadband video delivery over IP networks. This professional reference is designed for industry practitioners, including video engineers, and professionals in consumer electronics, telecommunications and media compression industries. The book is also suitable as a secondary text for advanced-level students in computer science and electrical engineering.',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0387710434',
          },
          {
            type: 'ISBN_13',
            identifier: '9780387710433',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 496,
        printType: 'BOOK',
        categories: [
          'Technology & Engineering',
        ],
        averageRating: 4,
        ratingsCount: 3,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=MKhbLPHRb78C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=MKhbLPHRb78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.com/books?id=MKhbLPHRb78C&pg=PA139&dq=h&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.com/books?id=MKhbLPHRb78C&dq=h&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/The_VC_1_and_H_264_Video_Compression_Sta.html?hl=&id=MKhbLPHRb78C',
      },
      saleInfo: {
        country: 'PS',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'PS',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink: 'http://books.google.com/books/download/The_VC_1_and_H_264_Video_Compression_Sta-sample-pdf.acsm?id=MKhbLPHRb78C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=MKhbLPHRb78C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: 'Display Order and POC in <b>H</b>.264 In MPEG-2, coding order and display order <br> have limited mapping capability between them for a GOP. The idea of Picture <br> Order Count (POC) in <b>H</b>.264 is to generalize such a mapping between coding <br> order&nbsp;...',
      },
    },
  ],
};

test('test helper', (t) => {
  console.log(render(actual.items));
  const expected = [{
    title: 'The VC-1 and H.264 Video Compression Standards for Broadband Video Services',
    bookUrl: 'http://books.google.com/books?id=MKhbLPHRb78C&pg=PA139&dq=h&hl=&cd=1&source=gbs_api',
    imageUrl: 'http://books.google.com/books/content?id=MKhbLPHRb78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    publishedDate: '2008-12-18',
    categories: ['Technology & Engineering'],
  }];
  t.deepEqual(render(actual.items), expected, 'should view title and imageUrl and bookUrl and publishedDate and categories');
  t.end();
});
