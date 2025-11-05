import React from 'react';
import { StyleSheet, Pressable, Linking, ScrollView } from 'react-native'; 
import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    AvatarBadge,
    HStack, 
    Box,
    Text,
    Image, 
} from '@gluestack-ui/themed';
import { Icon } from '@/components/ui/icon'; 

import {
    Camera,
    ChromeIcon,
    InstagramIcon,
    FacebookIcon,
    Settings,
} from 'lucide-react-native';
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@gluestack-ui/themed';
import { useToast, Toast, ToastTitle } from '@gluestack-ui/themed';

//Componente Adicional Creado (SocialIconLink)

export function SocialIconLink({ icon, color, url }) {
const handlePress = () => {
    if (url) {
        Linking.openURL(url).catch(err => console.error('No se pudo abrir la URL', err));
    }
};

 return (
  <Pressable onPress={handlePress}>
  {}
  <Icon as={icon} size="xl" color={color} />
  </Pressable>
   );
}

function ProfileScreen (){
    const toast = useToast();
    
    const showShareToast = () => {
        toast.show({
            placement: "top", 
            render: ({ id }) => {
                return (
                    <Toast nativeID={'toast-' + id} action="success" variant="solid">
                        <ToastTitle>¡Perfil copiado y listo para compartir!</ToastTitle>
                    </Toast>
                );
            },
        });
    };
 return (

<Box flex={1} bg="$white" p="$8"> 
  <Box style={{height: 40}}/> 

  {/* Avatar */}
   <HStack justifyContent="center" space="md" className="mt-16">
    <Avatar size="xl">
         <AvatarFallbackText>Sharon López</AvatarFallbackText>
          <AvatarImage
           source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
 }}
 />
 <AvatarBadge />
 </Avatar>
 </HStack>
 
{}
 <Box alignItems="center" mt="$5">
 <Text size="xl" fontWeight="$bold">Sharon Itzel López Delgado</Text>
 <Text size="md" color="$gray500">Práctica 3.2 - Perfil</Text>
 </Box>

{/* Espaciador */}
 <Box style={{height: 40}}/> 

 {/*Items (Grid Base) */}
 
 <HStack space="md" justifyContent="space-between">



 <Box style={styles.gridItem}>
 {/* Estructura anidada: VStack contiene un Icon y un Text */}
 <VStack space="sm" alignItems="center">
 <Icon 
 as={Camera} 
 size="xl" 
 color="#374151" 
 />
 <Text style={styles.gridText}>Mi Galería</Text>
 </VStack>
 </Box>



 <Box style={styles.gridItem}>
 <Image
 size="md"
  source={{
    uri: 'https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
 }}
 alt="Placeholder Image"
 style={{ borderRadius: 8 }}
 />
 </Box>

 <Box style={styles.gridItem} justifyContent="center" alignItems="center">
    <Icon as={Settings} size="xl" color="#374151" />
     <Text style={styles.gridText}>Ajustes</Text>

</Box>
 </HStack>
 {/* Espaciador */}
 <Box style={{height: 40}}/>

 <HStack space="xl" justifyContent="center" alignItems="center">

 <SocialIconLink
 as={InstagramIcon} 
 icon={InstagramIcon} 
 color="#a24b91ff" 
 url="https://instagram.com/sharon_s11"
 />
 <SocialIconLink
 icon={FacebookIcon} 
 color="#5487daff" 
 url="https://facebook.com/s.itzel.lopez" 
 />
 <SocialIconLink
 icon={ChromeIcon} 
 color="#c27f38ff" 
 url="https://google.com" 
 />
 </HStack>
{/* Espaciador */}
 <Box style={{height: 40}}/>

 <Box alignItems="center" mt="$2">
    <Button size="lg" variant="solid" action="primary" onPress={showShareToast}>
        <ButtonText>Compartir Perfil</ButtonText>
    </Button>
 </Box>


 </Box>   ); 

}

export default ProfileScreen;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, 
        backgroundColor: '#F3F4F6', 
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
 },
 gridText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
 }
})