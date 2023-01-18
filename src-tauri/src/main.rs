#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn my_custom_command(invoke_message: String) -> String {
    println!(
        "I was invoked from JS, with this message: {}",
        invoke_message
    );
    "Hello from Rust!".into()
}

#[tauri::command]
fn save_model(invoke_message: String) -> String {
    println!(
        "I was invoked from JS, with this message: {}",
        invoke_message
    );
    "Hello from Rust!".into()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
