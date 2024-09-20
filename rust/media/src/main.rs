mod content;

use content::catalog::Catalog;
use content::media::Media;

fn print_media(media: &Media) {
    println!("{:#?}", media);
}

fn main() {
    let audiobook = Media::Audiobook {
        title: String::from("Foobar book"),
    };
    let book = Media::Book {
        title: String::from("Good book"),
        author: String::from("Good author"),
    };
    let movie = Media::Movie {
        title: String::from("At party alone"),
        director: String::from("Silly Katz"),
    };
    print_media(&audiobook);
    print_media(&book);
    print_media(&movie);

    println!("{ }", audiobook.description());
    println!("{ }", book.description());
    println!("{ }", movie.description());

    let mut catalog = Catalog::new();
    catalog.add(audiobook);
    catalog.add(book);
    catalog.add(movie);
    catalog.add(Media::Podcast(33));

    println!("{:#?}", catalog);
    println!("{:#?}", Media::Placeholder.description());
    println!("{:#?}", Media::Podcast(44).description());
    let res = catalog.get_by_index(2);
    println!("{:#?}", res);

    let placeholder = Media::Placeholder;
    let res2 = catalog.get_by_index(0);

    println!("{:#?}", res2.unwrap_or(&placeholder));
}
