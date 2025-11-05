import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert, TextInput, Pressable } from 'react-native'; 
import {
  Text, View, Heading, VStack, HStack, Link, LinkText, Box,
  Input, InputField,
  Button, ButtonText,
  Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel,
  Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel,
  Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem,
  Switch,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
} from '@gluestack-ui/themed';
import { Check, CircleIcon, ChevronDownIcon, ExternalLink, Star } from 'lucide-react-native'; 

const FormScreen = () => {
  const [nombre, setNombre] = useState('');
  const [presionado, setPresionado] = useState(false);
  const [radioValue, setRadioValue] = useState('opcion1');
  const [sliderValue, setSliderValue] = useState(50);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [comentarios, setComentarios] = useState(''); 

  const handleSubmit = () => {
    Alert.alert(
      "Formulario Enviado",
      `Nombre: ${nombre}\nRadio: ${radioValue}\nSlider: ${sliderValue}\nAcepta Términos: ${aceptaTerminos ? 'Sí' : 'No'}\nComentarios: ${comentarios}`,
      [{ text: "OK" }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <VStack space="xl" p="$5">
        <Heading size="xl" color="$blue600">
          Práctica 3.1
        </Heading>
        

        {/* REQUISITO: Link + Icon */}
        <VStack space="sm">
            <Text fontWeight="$bold">Link </Text>
            <Link href="https://gluestack.io" isExternal>
                <HStack alignItems="center">
                    <LinkText size="md" color="$blue600" mr="$2">Visitar Gluestack-UI</LinkText>
                    <ExternalLink size={16} color="$blue600" />
                </HStack>
            </Link>
        </VStack>
        

        {/* 1. Componente Input */}
        <VStack space="sm">
          <Text fontWeight="$bold">1. Nombre:</Text>
          <Input variant="outline" size="md">
            <InputField
              placeholder="Ingresa tu nombre completo"
              value={nombre}
              onChangeText={setNombre}
            />
          </Input>
        </VStack>

        {/* 2. Componente RadioGroup */}
        <VStack space="sm">
          <Text fontWeight="$bold">2. Selecciona tu grupo:</Text>
          <RadioGroup value={radioValue} onChange={setRadioValue}>
            <HStack space="lg">
              <Radio value="opcion1">
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Opción A</RadioLabel>
              </Radio>
              <Radio value="opcion2">
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Opción B</RadioLabel>
              </Radio>
            </HStack>
          </RadioGroup>
        </VStack>

        {/* 3. Componente Checkbox */}
        <VStack space="sm">
          <Text fontWeight="$bold">3. Términos y Condiciones:</Text>
          <Checkbox
            value="terminos"
            isChecked={aceptaTerminos}
            onChange={setAceptaTerminos}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={Check} />
            </CheckboxIndicator>
            <CheckboxLabel>Acepto los términos y condiciones</CheckboxLabel>
          </Checkbox>
        </VStack>

        {/* 4. Componente Switch */}
        <HStack space="md" alignItems="center">
          <Text fontWeight="$bold">4. Habilitar Función:</Text> 
          <Switch
            value={presionado}
            onValueChange={setPresionado}
            size="md"
          />
          <Text>{presionado ? 'Activado' : 'Desactivado'}</Text>
        </HStack>

        {/* 5. Componente Slider */}
        <VStack space="md">
          <Text fontWeight="$bold">5. Desliza: Valor = {sliderValue}</Text>
          <Slider
            value={sliderValue}
            onChange={setSliderValue}
            minValue={0}
            maxValue={100}
            size="md"
            orientation="horizontal"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
        
        {/* 6. Componente Select */}
        <VStack space="sm">
          <Text fontWeight="$bold">6. Seleccione:</Text>
          <Select placeholder="Selecciona una ciudad">
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="Selecciona una ciudad" />
              <SelectIcon mr="$3">
                <ChevronDownIcon />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectItem label="Aguascalientes" value="ags" />
                <SelectItem label="Ciudad de México" value="cdmx" />
                <SelectItem label="Guadalajara" value="gdl" />
                <SelectItem label="Monterrey" value="mty" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </VStack>

        {/* 7. Componente TextArea (NATIVO - PARCHE) */}
        <VStack space="sm" mb="$10">
          <Text fontWeight="$bold">7. Área de Texto:</Text>
          <TextInput
            style={styles.textAreaNative}
            multiline={true} 
            numberOfLines={4} 
            onChangeText={setComentarios}
            value={comentarios}
            placeholder="Escribe tus comentarios aquí..."
          />
        </VStack>

        {/* Botón de envío */}
        <Button size="lg" onPress={handleSubmit} bg="$blue600">
          <ButtonText>Enviar Formulario</ButtonText>
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textAreaNative: {
    borderColor: '#d1d5db', 
    borderWidth: 1,
    borderRadius: 8, 
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlignVertical: 'top', 
    fontSize: 16,
    minHeight: 100, 
  }
});

