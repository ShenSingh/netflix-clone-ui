import React, { useEffect, useState, } from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { fetchMovies ,getGenres} from "../store";
import MyListSlider from "../components/Mylist-Slider";
function MyList() {
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ genres, type: "all" }));
        }
    }, [genresLoaded]);


    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(movies);
    return (
        <Container>
            <Navbar isScrolled={isScrolled} />

            <div style={{ marginTop: "100px" }}>
                <MyListSlider movies={movies}/>
            </div>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .container {
      position: absolute;
      bottom: 5rem;
    }
  }
`;
export default MyList;
