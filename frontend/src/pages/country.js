import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCountryInfo } from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const FlagImage = styled.img`
  width: 150px;
  height: auto;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin: 20px 0 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 1.1rem;
  color: #666;
`;

export default function Country() {
  const router = useRouter();
  const { code } = router.query;
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      const fetchCountryInfo = async () => {
        try {
          const data = await getCountryInfo(code);

          console.log("Country Info:", data);
          setCountryInfo(data);
        } catch (error) {
          console.error("Error fetching country info:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCountryInfo();
    }
  }, [code]);

  if (loading) return <Container><p>Loading...</p></Container>;
  if (!countryInfo) return <Container><p>Country not found.</p></Container>;

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Back to Countries List</BackButton>

      <Title>{countryInfo.name}</Title>
      <FlagImage src={countryInfo.flagUrl} alt={`Flag of ${countryInfo.name}`} />

      <SectionTitle>Border Countries</SectionTitle>
      <List>
        {Array.isArray(countryInfo.borders) && countryInfo.borders.length > 0 ? (
          countryInfo.borders.map((border) => (
            <ListItem key={border.countryCode || border.commonName || border}>
              {border.commonName || border.countryCode || border}
            </ListItem>
          ))
        ) : (
          <ListItem>No bordering countries</ListItem>
        )}
      </List>

      <SectionTitle>Population Data</SectionTitle>
      <List>
        {Array.isArray(countryInfo.population.populationCounts) && countryInfo.population.populationCounts.length > 0 ? (
          countryInfo.population.populationCounts.map((data, index) => (
            <ListItem key={index}>
              {data.year}: {data.value.toLocaleString()}
            </ListItem>
          ))
        ) : (
          <ListItem>No population data available</ListItem>
        )}
      </List>
    </Container>
  );
}
