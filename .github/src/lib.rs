use std::io;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn second_law(mass:i32,acceleration:i32)->i32{
    return (mass * acceleration)
}