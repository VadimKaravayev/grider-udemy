fn main() {
    let mut colors = vec![
        String::from("red"),
        String::from("green"),
        String::from("blue"),
        String::from("yellow"),
        String::from("red"),
    ];

    shorten_strs(&mut colors[1..3]);

    print_elements(&colors);
}

fn shorten_strs(xs: &mut [String]) {
    xs.iter_mut().for_each(|x: &mut String| x.truncate(1));
}

fn print_elements(elements: &[String]) {
    elements
        .iter()
        .map(|el| format!("{} {}", el, el))
        .for_each(|el| println!("{}", el));
}

// fn print_elements(elements: &Vec<String>) {
//     elements
//         .iter()
//         .map(|el| format!("{} {}", el, el))
//         .for_each(|el| println!("{}", el));
// }

// fn print_elements(elements: &Vec<String>) {
//     elements.iter().for_each(|el| println!("{}", el));
// }

// fn print_elements(elements: &Vec<String>) {
//     for element in elements {
//         println!("{}", element);
//     }
// }
