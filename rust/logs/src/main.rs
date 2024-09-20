use std::fs;
use std::io::Error;

fn main() {
    // let mut error_logs = vec![];
    // let file_result = fs::read_to_string("logs.txt");

    // test_string(String::from("red"), &String::from("red"), "red");

    // println!("{:#?}", text);

    match fs::read_to_string("logs.txt") {
        Ok(text) => {
            let error_logs = extract_errors(text.as_str());
            match fs::write("errors.txt", error_logs.join("\n")) {
                Ok(..) => println!("wrote to file"),
                Err(error) => println!("{}", error),
            }
        }
        Err(error) => println!("{}", error),
    }

    // println!("{:#?}", error_logs);

    // match divide(5.0, 0.0) {
    //     Ok(val) => println!("{}", val),
    //     Err(error) => println!("{:#?}", error),
    // }

    // match validate_email(String::from("foobar.com")) {
    //     Ok(..) => println!("Email valid"),
    //     Err(reason) => println!("{}", reason),
    // }
}

fn extract_errors(text: &str) -> Vec<&str> {
    let split_text = text.split("\n");
    let mut results = vec![];

    for line in split_text {
        if line.starts_with("ERROR") {
            results.push(line);
        }
    }
    results
}

// fn test_string(a: String, b: &String, c: &str) {}

// fn validate_email(email: String) -> Result<(), Error> {
//     if email.contains("@") {
//         Ok(())
//     } else {
//         Err(Error::other("must have @"))
//     }
// }

// fn divide(a: f64, b: f64) -> Result<f64, Error> {
//     if b == 0.0 {
//         Err(Error::other("can't divide by zero"))
//     } else {
//         Ok(a / b)
//     }
// }
