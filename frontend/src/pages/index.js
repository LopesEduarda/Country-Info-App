import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { getAvailableCountries } from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const CountryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 600px;
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0 auto;
`;

const CountryItem = styled.li`
  font-size: 1.2rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAvailableCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) return <Container><p>Loading...</p></Container>;

  return (
    <Container>
      <Title>Available Countries</Title>
      <CountryList>
        {countries.map((country) => (
          <CountryItem key={country.countryCode}>
            <StyledLink href={`/country?code=${country.countryCode}`}>
              {country.name}
            </StyledLink>
          </CountryItem>
        ))}
      </CountryList>
    </Container>
  );
}
