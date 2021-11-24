import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import styled from "styled-components/native";

import MapView from "react-native-maps";

import Build from "../../assets/building.png";
import House from "../../assets/house.png";
import Studio from "../../assets/studio.png";
import SP from "../../assets/sp2.png";
import BSB from "../../assets/bsb1.png";
import GYN from "../../assets/gyn.png";
import Verified from "../../assets/verified.png";

import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export const Carousel = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 10,
  },
}))``;

const color = ["#E6E6E6", "#CBCBCB", "#D4D4D4"];

const Home = () => {
  const [showActions, setShowActions] = React.useState(false);
  const [fullMap, setFullMap] = React.useState(true);

  const Header = () => {
    return (
      <View
        style={{
          opacity: showActions ? 0.1 : null,
          height: 120,
          paddingTop: 40,
          paddingBottom: 10,
          width: "100%",
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingRight: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ marginLeft: 70 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26, textAlign: "left" }}>
            Stots
          </Text>
          <Text style={{ fontSize: 12, textAlign: "left" }}>Corretor</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 25,
            display: "flex",
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>
            Meu perfil
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Mapa = () => {
    return (
      <ImageBackground
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/76/62/15/360_F_276621560_l8QprXoNIKR9UdyAMs3QF4594qokETsp.jpg",
        }}
        imageStyle={{ borderRadius: 5, opacity: 0.4 }}
        style={{
          marginTop: 10,
          alignItems: "center",
          borderRadius: 5,
          padding: 20,
          backgroundColor: "#000",
        }}
      >
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#fff",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Encontre o imóvel perfeito para o seu cliente
        </Text>
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#fff",
            fontSize: 16,
          }}
        >
          Baseado na localização ideal
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#fff",
            marginTop: 20,
            width: "100%",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
            Iniciar busca pelo mapa
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  const Try = () => {
    return (
      <View
        style={{
          padding: 10,
          paddingRight: 20,
          height: 90,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
          borderRadius: 5,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "left",
              width: "100%",
              color: "#fff",
              fontSize: 20,
            }}
          >
            Oi, Ricardo
          </Text>
          <Text
            style={{
              textAlign: "left",
              width: "100%",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Você tem 7 novas mensagens
          </Text>
        </View>
      </View>
    );
  };

  const Filtros = () => {
    return (
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
          borderRadius: 5,
          padding: 20,
          paddingHorizontal: 20,
          backgroundColor: "#000",
        }}
      >
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#fff",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Encontre o imóvel que o seu cliente precisa
        </Text>
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#eee",
            fontSize: 16,
          }}
        >
          Baseado nos requisitos do seu cliente
        </Text>
        {/* <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#fff",
            fontSize: 16,
          }}
        >
          Baseado nos requisitos do seu cliente
        </Text> */}
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#fff",
            marginTop: 20,
            width: "100%",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
            Iniciar busca baseada em filtros
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Lista = () => {
    return (
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
          borderRadius: 5,
          padding: 20,
          backgroundColor: color[0],
        }}
      >
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#000",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Encontre todos os imóveis listados na Stots
        </Text>
        <Text
          style={{
            textAlign: "left",
            width: "100%",
            color: "#000",
            fontSize: 16,
          }}
        >
          Lista de todas as propriedades disponíveis
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#fff",
            marginTop: 20,
            width: "100%",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
            Lista de propriedades
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Actions = () => {
    return (
      <Carousel style={{ marginTop: 10, marginLeft: 10 }}>
        <TouchableOpacity
          style={{
            height: 110,
            borderRadius: 5,
            width: 110,
            justifyContent: "center",
            paddingLeft: 10,
            backgroundColor: "#000",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              borderRadius: 5,
            }}
          ></View>
          <Text
            style={{
              width: "60%",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Meu perfil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            height: 110,
            borderRadius: 5,
            width: 110,
            padding: 10,
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              borderRadius: 5,
            }}
          ></View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Adicionar propríedade
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            height: 110,
            borderRadius: 5,
            width: 110,
            justifyContent: "center",
            paddingLeft: 10,
            backgroundColor: "#000",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              borderRadius: 5,
            }}
          ></View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Consultar propríedades
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            height: 110,
            borderRadius: 5,
            width: 110,
            justifyContent: "center",
            paddingLeft: 10,
            backgroundColor: "#000",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              borderRadius: 5,
            }}
          ></View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Visitas agendadas
          </Text>
        </TouchableOpacity>
      </Carousel>
    );
  };

  const Search = () => {
    return (
      <View
        style={{
          height: "auto",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            height: 190,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#000",
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 33,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Busca por filtros
          </Text>
          <Text style={{ color: "#ddd", textAlign: "left", fontSize: 16 }}>
            Encontre o imóvel preciso que o seu cliente precisa
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
              borderRadius: 50,
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: "#333",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
              Iniciar busca
            </Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Sidebar = () => {
    return (
      <>
        {!showActions && (
          <TouchableOpacity
            onPress={() => setShowActions(!showActions)}
            style={{
              zIndex: 2,
              top: 50,
              left: 20,
              position: "absolute",
              height: 50,
              width: 50,
              backgroundColor: "#000",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        {showActions && (
          <>
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                bottom: 0,
                left: 0,
                height: "100%",
                width: "70%",
                paddingTop: 50,
                backgroundColor: "#000",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#000",
                  padding: 10,
                  paddingLeft: 20,
                  paddingRight: 0,
                  height: 50,
                  width: "70%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 50,
                }}
              >
                <Image
                  source={{ uri: "https://github.com/0xrfsd.png" }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 45,
                    backgroundColor: "#000",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ color: "#fff", fontSize: 16 }}>
                      Ricardo Domene
                    </Text>
                    <Image
                      source={Verified}
                      style={{ marginLeft: 10, height: 16, width: 16 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#ddd ",
                      fontSize: 12,
                      color: "#555",
                      fontWeight: "bold",
                    }}
                  >
                    CRECI 166503
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: "auto",
                  width: "100%",
                  marginTop: 20,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginTop: 20,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  Buscar
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons
                    style={{ marginRight: 6 }}
                    name="filter-list"
                    size={18}
                    color="white"
                  />
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Buscar por filtros
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons
                    style={{ marginRight: 6 }}
                    name="search"
                    size={18}
                    color="white"
                  />
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Buscar no mapa
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#fff",
                    marginTop: 30,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  Seus imóveis
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Imóveis listados
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Listar imóvel
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#fff",
                    marginTop: 30,
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  Ajuda
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Perguntas frequentes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    borderRadius: 25,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    Suporte via Whatsapp
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  position: "absolute",
                  bottom: 20,
                  width: "100%",
                  borderTopWidth: 1,
                  borderTopColor: "#111",
                  paddingTop: 20,
                  padding: 10,
                }}
              >
                <Text style={{ color: "#ddd" }}>Stots</Text>
                <Text style={{ color: "#333" }}>V0.0.1</Text>
              </View>
            </View>
            <Pressable
              onPress={() => {
                setTimeout(() => {
                  setShowActions(false);
                }, 10);
              }}
              style={{
                position: "absolute",
                height: "100%",
                width: "30%",
                zIndex: 1,
                right: 0,
              }}
            ></Pressable>
          </>
        )}
      </>
    );
  };

  const A = () => {
    return (
      <>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 26,
            color: "#000",
          }}
        >
          Buscar por tipo
        </Text>
        <View
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "auto",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                height: "auto",
                width: 100,
                alignItems: "center",
                borderRadius: 5,
                backgroundColor: "#eee",
              }}
            >
              <Image source={Studio} style={{ height: 100, width: 80 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              Studio
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: "auto",
                width: 100,
                borderRadius: 5,
                backgroundColor: "#ddd",
              }}
            >
              <Image source={Build} style={{ height: 100, width: 100 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              Apartamento
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: "auto",
                width: 100,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ddd",
              }}
            >
              <Image source={House} style={{ height: 100, width: 80 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              Casa
            </Text>
          </View>
        </View>
      </>
    );
  };

  const B = () => {
    return (
      <>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 26,
            marginTop: 20,
            color: "#000",
          }}
        >
          Buscar por cidade
        </Text>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "auto",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                height: "auto",
                width: 100,
                alignItems: "center",
                borderRadius: 5,
                backgroundColor: "#eee",
              }}
            >
              <Image source={SP} style={{ height: 100, width: 100 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              São Paulo
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: "auto",
                width: 100,
                borderRadius: 5,
                backgroundColor: "#ddd",
              }}
            >
              <Image source={GYN} style={{ height: 100, width: 100 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              Goiânia
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ddd",
              }}
            >
              <Image source={BSB} style={{ height: 95, width: 100 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginTop: 5,
                fontSize: 14,
              }}
            >
              Brasília
            </Text>
          </View>
        </View>
      </>
    );
  };

  const C = () => {
    return (
      <>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 26,
            color: "#000",
          }}
        >
          Próximo de você
        </Text>
        <Pressable
          style={{ paddingHorizontal: 20 }}
          onPress={() => setFullMap(true)}
        >
          <MapView style={{ height: 150, width: '100%', borderRadius: 5, marginTop: 10 }} />
        </Pressable>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Header />
      <Sidebar />
      <ScrollView style={{ marginTop: 10, opacity: showActions ? 0.1 : null }}>
        <Search />
        <A />
        <B />
        <C />
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              height: "auto",
              width: "100%",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text style={{ color: "#aaa" }}>Todos os direitos reservados</Text>
            <Text style={{ color: "#777", fontSize: 16 }}>Stots Co.</Text>
          </View>
        </View>
        <View style={{ height: 10 }} />
      </ScrollView>
    </View>
  );
};

export default Home;
